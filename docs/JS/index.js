function home(){
    var url = window.location.href;
    const stringAprocurar = 'docs/index.html';
    const stringAprocurarDois = 'NathanPage/index.html';
    if(url.includes(stringAprocurar) || url.includes(stringAprocurarDois))
        window.location.href = "index.html"
    else{
        window.location.href = "../index.html"
    }
}

function contact(){
    window.location.href = "pages/contact.html"
}

function projects(){
    window.location.href = "pages/projects.html"
}

function technology(){
    window.location.href = "pages/technology.html"
}

function about(){
    window.location.href = "pages/about.html"
}