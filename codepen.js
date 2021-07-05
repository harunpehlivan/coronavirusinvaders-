const codepenStyle = document.createElement('style');
twitterStyle.innerText = `

    .twitterLink {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 2.5em;
        height: 2.5em;
        border-radius: 100% 0 0 0 / 100% 0 0 0;
        background-color: #777;
        box-shadow: 0 0 5px #0007;
        transform-origin: bottom right;
        transition: all 0.25s;
        cursor: pointer;
        z-index: 9999;
    }

    .codepenLink:hover {
        background-color: #00a2f5;
        box-shadow: 0 0 10px #000;
        transform: scale(1.25);
    }

    .twitterIcon {
        position: absolute;
        bottom: 0.2em;
        right: 0.2em;
        width: 1.5em;
        height: 1.5em;
        filter: drop-shadow(0 0 2px #0007);
    }
`;
document.querySelector('head').appendChild(twitterStyle);

const codepenPath = "https://codepen.io/harunpehlivan";
const codepenLink = document.createElement('a');
codepenLink.classList="codepenLink"
// codepenLink.href = codepenPath;
// codepenLink.setAttribute('taget', '_top');
codepenLink.addEventListener('click', () => {
    window.open(codepenPath, '_top');
})

const codepenIcon = document.createElement('img');
codepenIcon.classList="codepenIcon"
codepenIcon.src = "https://res.cloudinary.com/tercuman-b-l-m-merkez/image/upload/v1608987526/codepen-white_tfzwlr.png";

codepenLink.appendChild(codepenIcon);
document.querySelector('body').appendChild(twitterLink);