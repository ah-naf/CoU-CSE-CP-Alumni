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
    name: "Rajib Chandra Pal",
    session: "2011-12",
    avatar: "rajib.png",
    social: {
      linkedin: "https://www.linkedin.com/in/rajib-chandra-pal-526890159/",
      codeforces: "https://codeforces.com/profile/rajib_119",
      facebook: "https://www.facebook.com/profile.php?id=61554084936485",
    },
  },
  {
    name: "Mohammad Mohsin",
    session: "2011-12",
    avatar: "mohsin.png",
    social: {
      linkedin: "https://www.linkedin.com/in/mohammad-mohsin-601527159/",
    },
  },
  {
    name: "Reajul Haque Reayz",
    session: "2012-13",
    avatar: "reayz.png",
    social: {
      linkedin: "https://www.linkedin.com/in/reayz/",
      codeforces: "https://codeforces.com/profile/Reayz",
      github: "https://github.com/Reayz",
      facebook: "https://www.facebook.com/reajul.haque",
    },
  },
  {
    name: "Ashraful Afruz",
    session: "2012-13",
    avatar: "afruz.png",
    social: {
      codeforces: "https://codeforces.com/profile/ashraful_afruz",
      facebook: "https://www.facebook.com/resoluteash.khan",
    },
  },
  {
    name: "MD Sakhawat Hosen",
    session: "2013-14",
    avatar: "sakhawat.png",
    social: {
      linkedin: "https://www.linkedin.com/in/md-sakhawat-hosen-475b16239/",
      codeforces: "https://codeforces.com/profile/InshaAllah",
      facebook: "https://www.facebook.com/sakhawatcou",
    },
    
  },
  {
    name: "Yasir Uddin Ahamed",
    session: "2014-15",
    avatar: "nabil.png",
    social: {
      linkedin: "https://www.linkedin.com/in/yasir-uddin-ahamed/",
      codeforces: "https://codeforces.com/profile/shikimaru",
      github: "https://github.com/yasirnabil534",
      facebook: "https://www.facebook.com/itz.n.boss",
    },
  },
  {
    name: "Aminul Islam Mamun",
    session: "2014-15",
    avatar: "mamun.png",
    social: {
      linkedin: "https://www.linkedin.com/in/numamsa/",
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
