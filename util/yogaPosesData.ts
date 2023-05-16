export const showNextPose = (index, array) => {
  if (index === array.length - 1) return 0;
  return ++index;
};

export const yogaPosesData = [
  {
    alt: "Woman demonstrating downward dog pose",
    description: "This is the Downward Dog pose! Check it out!",
    src: "/pose-downwardDog.webp",
    title: "Downward Dog",
  },
  {
    alt: "Woman standing up straight with arms at side and palms facing inner-thighs",
    description: "Get sturdy with the Mountain pose!",
    src: "/pose-mountain.webp",
    title: "Mountain",
  },
  {
    alt: "Woman demonstrating warrior pose",
    description:
      "War. War never changes. Neither does the classic Warrior One pose!",
    src: "/pose-warriorOne.webp",
    title: "Warrior One",
  },
];
