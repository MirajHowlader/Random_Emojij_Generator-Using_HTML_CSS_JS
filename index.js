const btnEl =document.getElementById('btn');
const EmojiNameEl =document.getElementById('emoji-name');

const emoji = [];

async function getEmoji(){
    let response = await fetch('https://emoji-api.com/emojis?access_key=6f613b61037932971432e392d31837a636890a55');
    let data =await response.json();
    
    for(let i=0;i<1500;i++){
        emoji.push({
            emojiname: data[i].character,
            emojiCode: data[i].unicodeName

        })
    }

}
getEmoji();


btnEl.addEventListener('click', () =>{
    const randomNum = Math.floor(Math.random()*emoji.length);
    btnEl.innerText = emoji[randomNum].emojiname;
    EmojiNameEl.innerText =emoji[randomNum].emojiCode
    
    
})