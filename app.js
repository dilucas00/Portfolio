const botao_Home = document.getElementById('botao-sobremim');

botao_Home.addEventListener("click", function() {
    document.getElementById('titulo-home').innerHTML = 'Hello, my name is <span> Gabriel Di Lucas </span>';
    document.getElementById('paragrafo-home').innerHTML = 'I am a <span> front-end developer </span> and am currently completing an undergraduate degree  Systems analysis and development.';
    document.getElementById('titulo-sobremim').innerHTML = 'About Me';
    document.getElementById('paragrafo-sobremim').innerHTML = 'I`m a 19-year-old young professional, studying Systems Analysis and Development. I have a solid foundation in development and a strong interest in innovative technological solutions. I am committed to applying my knowledge and skills to contribute meaningfully to challenging and dynamic projects. Always looking for growth and continuous learning, I am ready to face new opportunities and challenges in the field of technology.';
    document.getElementById('nav-sobremim').innerHTML = "About me";
    document.getElementById('nav-contato').innerHTML = "Contact";
    document.getElementById('nav-experiencia').innerHTML = "Experience";
    document.getElementById('nav-projetos').innerHTML = "Projects";
    document.getElementById('nav-formacao').innerHTML = "Formation";
});