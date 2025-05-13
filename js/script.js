document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open');
})

document.querySelector('.first-li').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('.burger').classList.toggle('active');
})

document.querySelector('.second-li').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('.burger').classList.toggle('active');
})

document.querySelector('.third-li').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('.burger').classList.toggle('active');
})