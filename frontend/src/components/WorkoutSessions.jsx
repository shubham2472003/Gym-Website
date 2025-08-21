import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Our workout sessions combine strength, cardio, flexibility, and
          endurance training to maximize results, boost energy, and enhance
          performance!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Unleash your potential with our elite bootcamps designed to transform
          your body and mind. Each program blends strength, endurance, and
          motivation, pushing you beyond limits while keeping every session
          exciting and impactful. Whether your goal is to build muscle, burn
          fat, or boost stamina, our bootcamps deliver the ultimate fitness
          experience.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength Training</h4>
            <p>
              Build raw power and muscle definition with progressive overload,
              weightlifting techniques, compound movements, and personalized
              coaching guidance.
            </p>
          </div>
          <div>
            <h4>Cardio Blast</h4>
            <p>
              Burn calories quickly through high-intensity treadmill runs,
              cycling intervals, boxing drills, sprints, and energizing
              endurance training sessions.
            </p>
          </div>
          <div>
            <h4>Functional Fitness</h4>
            <p>
              Improve mobility, coordination, and flexibility using bodyweight
              exercises, kettlebells, resistance bands, balance drills, and core
              conditioning routines.
            </p>
          </div>
          <div>
            <h4>CrossFit Challenge</h4>
            <p>
              Test physical and mental limits with demanding workouts mixing
              Olympic lifts, gymnastics skills, plyometrics, sprints, and
              teamwork challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
