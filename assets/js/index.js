






// Category =======================================================
const htmlCategory = ['https://i.ytimg.com/vi/_J6hMLsscOo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8Yy8ttwIR_evYkfpUthKDInD1SA','Основи html5 повний курс.','25.09.2021','https://i.ytimg.com/vi/4jYYHaTwWvY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4vpqPRTWPHJmI0N_bws66yeD7Dg','Основи html, основні поняття.','20.09.2021']
const cssCategory = ['https://i.ytimg.com/vi/GoBvYPwv-g8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAH_gS5r2vG3dAOeGnhBMT0Oq7Bdw','Основи css, основні поняття.','20.09.2021']
const jsCategory = ['https://i.ytimg.com/vi/CxgOKJh4zWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_99RyTs8RpkSvSRli3NRDgUPKyw','Основи js, основні поняття.','13.07.2022']
const phpCategory = []
const practicCategory = ['https://i.ytimg.com/vi/CvEttNvty0U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdrbZcApZ0mEplS-27ycgO7lzu_g','Практика 1 (ЛЕГКА).','22.09.2021']
const otherCategory = ['https://i.ytimg.com/vi/BqO5Pj26om8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuMrgx7XBwKx8MbxSZxXqOVkWk6w','Prepros що це. Як користуватися prepros.','22.09.2021','https://i.ytimg.com/vi/bigvU9YnQPA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDggruu7aRPKFR30UBrA6SJrVvwqA','Безплатні сервіси для роботи з макетами Photoshop (PSD). (Zeplin і Marsy).','22.09.2021','https://i.ytimg.com/vi/InSenLOKtSQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPKf8ZvullgZYn-yi35OYbq26VA','Як вивчити html і css?','22.09.2021']
// Article =======================================================
const htmlVideo = ['Основи html5 повний курс.','https://www.youtube.com/embed/CvEttNvty0U','Основи html, основні поняття.','https://www.youtube.com/embed/4jYYHaTwWvY']
const cssVideo = ['Основи css, основні поняття.','https://www.youtube.com/embed/GoBvYPwv-g8']
const jsVideo = ['Основи js, основні поняття.','https://www.youtube.com/embed/CxgOKJh4zWE']
const phpVideo = []
const practicVideo = ['Практика 1 (ЛЕГКА).','https://www.youtube.com/embed/CvEttNvty0U']
const otherVideo = ['Prepros що це. Як користуватися prepros.','https://www.youtube.com/embed/BqO5Pj26om8','Безплатні сервіси для роботи з макетами Photoshop (PSD). (Zeplin і Marsy).','https://www.youtube.com/embed/bigvU9YnQPA','Як вивчити html і css?','https://www.youtube.com/embed/InSenLOKtSQ']

// const links = ['index.html', 'головна', 'categories.html', ' Категорії']
// const mainPageLinks = [links[0], links[1], 'pages/' + links[2], links[3]]
// const categoriesLinks = ['../' + links[0], links[1], links[2], links[3]]
// const categoryLinks = ['../../' + links[0], links[1], '../' + links[2], links[3]]
// let i = 0
// window.onload = function() {
// 	while (i < 200) {
// 		if (mainPageLinks[i] === undefined) {
// 			return 0
// 		}else {
// 			const a = i
// 			const b = i + 1
// 			let header = document.querySelector('.mainPage')
// 			let link = document.createElement('a')
// 			link.innerHTML = mainPageLinks[b]
// 			link.href = mainPageLinks[a]
// 			link.className = 'shadow'
// 			header.append(link)
// 			i = i + 2
// 		}
// 	}	
// }

$(document).ready(function(){
  $('.header__menu-burger').click(function(){
    $('.header').toggleClass('active')
    $('body').toggleClass('active')
  })
});
// =======================================================
$(document).ready(function(){
    $(".up").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});
// =======================================================
const todos = JSON.parse(localStorage.getItem("dark-mode"));

if (todos == '1') {
  $('body').toggleClass('dark-mode')
  $('html').toggleClass('dark-mode')
}
function white() {
  localStorage.removeItem("dark-mode", JSON.stringify(1));
  location.reload();
}
function dark() {
  localStorage.setItem("dark-mode", JSON.stringify(1));
  location.reload();
}