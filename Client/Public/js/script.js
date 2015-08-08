$(document).ready(function() {
	$('#addCandidateButton').on('click',function() {
		$('.mainPageContainer').addClass('hide');
		$('.addCandidate').removeClass('hide');
		$('.additionalDetails').addClass('hide');
	})
	$('#cancelButton').on('click',function() {
		$('.mainPageContainer').removeClass('hide');
		$('.addCandidate').addClass('hide');
		$('.additionalDetails').addClass('hide');
	})

	$('.moreDetails').on('click', function(e) {
		e.preventDefault();
		$('.mainPageContainer').addClass('hide');
		$('.addCandidate').addClass('hide');
		$('.additionalDetails').removeClass('hide');
	})
	$('#backButton').on('click', function(e) {
		e.preventDefault();
		$('.mainPageContainer').removeClass('hide');
		$('.addCandidate').addClass('hide');
		$('.additionalDetails').addClass('hide');
	})
	$("#submitFrm").on('click',function(){
		console.log($('#candidateForm').serializeJSON());
	})

	
});