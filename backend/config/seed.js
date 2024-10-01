const { prisma } = require("./prisma");

const muscleGroupsWithExercises = [
  {
    name: 'Chest',
    exercises: [
      'Bench Press',
      'Incline Dumbbell Press',
      'Chest Fly',
      'Push Up',
      'Cable Cross-over'
    ],
  },
  {
    name: 'Back',
    exercises: [
      'Pull Up',
      'Deadlift',
      'Lat Pulldown',
      'Barbell Row',
      'T-Bar Row'
    ],
  },
  {
    name: 'Triceps',
    exercises: [
      'Tricep Dips',
      'Overhead Tricep Extension',
      'Tricep Pushdown',
      'Close-Grip Bench Press'
    ],
  },
  {
    name: 'Biceps',
    exercises: [
      'Barbell Curl',
      'Dumbbell Curl',
      'Preacher Curl',
      'Concentration Curl'
    ],
  },
  {
    name: 'Shoulders',
    exercises: [
      'Shoulder Press',
      'Lateral Raise',
      'Front Raise',
      'Arnold Press',
      'Upright Row'
    ],
  },
  {
    name: 'Quads',
    exercises: [
      'Squat',
      'Leg Press',
      'Lunges',
      'Bulgarian Split Squat',
      'Leg Extension'
    ],
  },
  {
    name: 'Glutes',
    exercises: [
      'Hip Thrust',
      'Glute Bridge',
      'Cable Kickbacks',
      'Step Ups'
    ],
  },
  {
    name: 'Hamstrings',
    exercises: [
      'Romanian Deadlift',
      'Leg Curl',
      'Good Mornings',
      'Glute Ham Raise'
    ],
  },
  {
    name: 'Calves',
    exercises: [
      'Calf Raise',
      'Seated Calf Raise',
      'Smith Machine Calf Raise'
    ],
  },
  {
    name: 'Traps',
    exercises: [
      'Shrugs',
      'Rack Pulls',
      'Farmer’s Carry',
      'Barbell Shrug'
    ],
  },
  {
    name: 'Forearms',
    exercises: [
      'Wrist Curl',
      'Reverse Curl',
      'Hammer Curl'
    ],
  },
  {
    name: 'Abs',
    exercises: [
      'Crunch',
      'Plank',
      'Leg Raise',
      'Russian Twist',
      'Cable Crunch'
    ],
  },
];

async function main() {
  console.log('Seeding muscle groups and exercises...');

  for (const group of muscleGroupsWithExercises) {
    // Upsert the muscle group
    const muscleGroup = await prisma.muscleGroup.upsert({
      where: { name: group.name },
      update: {},
      create: {
        name: group.name,
      },
    });

    // Add exercises for the muscle group
    for (const exerciseName of group.exercises) {
      await prisma.excercise.create({
        data: {
          name: exerciseName,
          muscleGroupId: muscleGroup.id, // Link to the MuscleGroup
          workoutId: null, // You can set this later when linking to a specific workout
        },
      });
    }
  }

  console.log('Muscle groups and exercises seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });