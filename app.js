let workouts = [];
let goal = '';

function logWorkout(event) {
    event.preventDefault();
    
    const exercise = document.getElementById('exercise').value;
    const duration = parseInt(document.getElementById('duration').value);
    const calories = parseInt(document.getElementById('calories').value);

    const workout = {
        exercise,
        duration,
        calories,
    };

    workouts.push(workout);
    document.getElementById('workout-form').reset();
    displayWorkouts();
}

function displayWorkouts() {
    const workoutList = document.getElementById('workout-list');
    workoutList.innerHTML = '';

    workouts.forEach((workout) => {
        const li = document.createElement('li');
        li.textContent = `${workout.exercise}: ${workout.duration} minutes, ${workout.calories} calories`;
        workoutList.appendChild(li);
    });

    updateProgress();
}

function setGoal() {
    goal = document.getElementById('goal').value;
    document.getElementById('goal-status').textContent = `Goal set: ${goal}`;
}

function updateProgress() {
    const totalWorkouts = workouts.length;
    const totalCalories = workouts.reduce((sum, workout) => sum + workout.calories, 0);
    const progress = document.getElementById('progress');

    progress.innerHTML = `Total Workouts: ${totalWorkouts}, Total Calories Burned: ${totalCalories}`;
}

document.getElementById('workout-form').addEventListener('submit', logWorkout);
document.getElementById('set-goal-btn').addEventListener('click', setGoal);
