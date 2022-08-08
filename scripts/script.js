

fetch('https://news-api-3.herokuapp.com/')
    .then(response => response.json())
    .then(data => setDataToContainer(data))
    .catch(err => console.error(err));


const setDataToContainer = async (data) => {
    
    const news_div = document.createElement('div');
    for(const key in data){
       if(key != 'about'){
        const news_h = document.createElement('h2');
        news_h.innerHTML = "● " + key;
        news_div.appendChild(news_h);
        var key_data = data[key];
        const news_ul = document.createElement('ul');
        news_div.appendChild(news_ul);
        for (const news in key_data){
            const news_li = document.createElement('li');
            news_li.innerHTML = key_data[news];
            news_ul.appendChild(news_li);

        }
    }
    }
    document.getElementById('news_container').appendChild(news_div)
    document.querySelector('.spinner__container').style.display = "none"
}