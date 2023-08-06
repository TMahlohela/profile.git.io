var slideIndex = 0;
	showSlides(slideIndex);
					
function plusSlides(n){
	showSlides(slideIndex += n);
}
					
function currentSlide(n){
    showSlides(slideIndex = n);
}
					
function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");								
	for (i=0; i < slides.length; i++)
	{
		slides[i].style.display = "none";
	}	
	slideIndex++;
			
    if (slideIndex > slides.length) 
	{
		slideIndex = 1
	}
	if (slideIndex < 0) 
	{
		slideIndex = slides.length
	}						
		slides[slideIndex - 1].style.display = "block";
    	setTimeout(showSlides, 5000);
}