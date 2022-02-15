function updateList() {
	const titles = [...document.querySelectorAll('.sect')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-sect").forEach(c => c.classList.remove("selected-sect"));
	
	document.querySelectorAll(".nav-hl")[[...document.querySelectorAll('.sect')].indexOf(titles[0])].classList.add("selected-sect");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

function myFunction() {
    document.querySelector("#myDropdown").classList.toggle("show");
    document.querySelector("#myDropdown").classList.toggle("dropdownmenu-6");
    console.log("hello");

}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
  
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}