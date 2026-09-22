document.getElementById('survey-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const experience = document.querySelector('input[name="experience"]:checked')?.value;
    const goal = document.querySelector('input[name="goal"]:checked')?.value;
    const preference = document.querySelector('input[name="preference"]:checked')?.value;

    const answers = {
        experience,
        goal,
        preference
    };

    console.log(answers);

    // Redirect to the 'learn' page
    window.location.href = 'learn.html';
});
