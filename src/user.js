export default [
  {
    name: "Ahnaf Hasan Shifat",
    session: "2019-20",
    avatar: "ahnafshifat.jpeg",
    social: {
      github: "https://www.github.com/ah-naf",
      facebook: "https://www.facebook.com/ahnaf.hasan.144",
      linkedin: "https://www.linkedin.com/in/ahnafhasan144",
      codeforces: "https://codeforces.com/profile/Ah_naf",
    },
  },
  {
    name: "Md. Rakib Hossain",
    session: "2019-20",
    avatar: "rakibjoy.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/therakibjoy",
      codeforces: "https://codeforces.com/profile/RakibJoy",
      github: "https://github.com/TheRakibJoy",
      facebook: "https://www.facebook.com/therakibjoy",
    },
  },
  {
    name: "Mestu Paul",
    session: "2018-19",
    avatar: "Mestu.png",
    social: {
      linkedin: "https://www.linkedin.com/in/mestu-paul-17076a195",
      codeforces: "https://codeforces.com/profile/Mestu",
      github: "https://github.com/Mestu-Paul",
      facebook: "https://www.facebook.com/mestu.paul.812",
    },
  },
  {
    name: "Mehedi Hasan Arafat",
    session: "2018-19",
    avatar: "mehedi_arafat.png",
    social: {
      linkedin: "https://www.linkedin.com/in/mehedi-hasan-arafat-aa061473",
      codeforces: "https://codeforces.com/profile/m-e-h-e-d-i",
      github: "https://github.com/Mehedi-10",
      facebook: "https://www.facebook.com/The.genius.mehedi.hasan.arafat.10",
    },
  },
  {
    name: "Md.Jahir (Labib) Rayhan",
    session: "2018-19",
    avatar: "Jahir_rayhan.png",
    social: {
      linkedin: "https://www.linkedin.com/in/md-jahir-rayhan-b60279176",
      codeforces: "https://codeforces.com/profile/rayhan_labib",
      github: "https://github.com/Rayhan-labib7",
      facebook: "https://www.facebook.com/jahir.rayhan.982845",
    },
  },
  {
    name: "Bonusree Datta",
    session: "2018-19",
    avatar: "bonusree.png",
    social: {
      linkedin: "https://www.linkedin.com/in/bonusree-datta-26598022a",
      codeforces: "https://codeforces.com/profile/Bonusree_Datta",
      facebook: "https://www.facebook.com/bonusreedatta.99",
    },
  },
].sort((a, b) => {
  // Compare sessions first:
  const sessionComparison = a.session.localeCompare(b.session);
  if (sessionComparison !== 0) {
    return sessionComparison;
  }
  // If sessions are the same, compare by name:
  return a.name.localeCompare(b.name);
});
