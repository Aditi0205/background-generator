
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = change;
});

const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
function change() {
	document.body.style.background = random_hex_color_code();
}
