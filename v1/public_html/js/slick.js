// 横スライドタイプのサムネイルスライドショー
	$('.list-slide').slick({
		autoplay: true,
		arrows: false,			//左右の矢印
		autoplaySpeed: 0,		//切り替えのスピード。今回は平均してなめらかに移動させるので0にする。
		speed: 7000,			//スライドのスピード
		cssEase: 'linear',		//アニメーションのパターン。通常はこのままでOK。
		slidesToShow: 4,		//画面内に表示させる枚数。
		slidesToScroll: 1,		//１回でスライド移動する枚数。
		
		//画面幅899px以下の設定
		responsive: [
		{
		breakpoint: 899,	//ブレークポイント
		settings: {
		slidesToShow: 2,	//画面内に表示させる数。2枚。
		}
		}
		]
});

// uses manual スライドショー
const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
let count = 0;

let autoPlayInterval;
function updateListBackground() {
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor = i === count % totalSlides ? '#000' : '#fff';
  }
}
function nextClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count++;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}
function prevClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count--;
  if (count < 0) count = totalSlides - 1;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}
function startAutoPlay() {
  autoPlayInterval = setInterval(nextClick, 4000);
}
function resetAutoPlayInterval() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}
next.addEventListener('click', () => {
  nextClick();
  resetAutoPlayInterval();
});
prev.addEventListener('click', () => {
  prevClick();
  resetAutoPlayInterval();
});
indicator.addEventListener('click', (event) => {
  if (event.target.classList.contains('list')) {
    const index = Array.from(lists).indexOf(event.target);
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count = index;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
    resetAutoPlayInterval();
  }
});
startAutoPlay()

