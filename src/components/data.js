const data = [
  {
    id: 1,
    question: "كان من خلق النبي صلى الله عليه وسلم؟",
    answers: [
      { text: "الصدق", correct: true },
      { text: "الغضب", correct: false },
      { text: "عدم التواضع", correct: false },
      { text: "عدم الصدق", correct: false },
    ],
  },
  {
    id: 2,
    question: "ما اسم والد النبي صلى الله عليه وسلم؟",
    answers: [
      { text: "محمد", correct: false },
      { text: "عبدالله", correct: true },
      { text: "إبراهيم", correct: false },
      { text: "عبد مناف", correct: false },
    ],
  },
  {
    id: 3,
    question: "ما اسم والدة النبي صلى الله عليه وسلم؟",
    answers: [
      { text: "آمنة بنت وهب", correct: true },
      { text: "حليمة السعدية", correct: false },
      { text: "فاطمة بنت حبيش", correct: false },
      { text: "خديجة بنت خويلد", correct: false },
    ],
  },
  {
    id: 4,
    question: "في أي يوم ولد النبي صلى الله عليه وسلم؟",
    answers: [
      { text: "في الأول من صفر", correct: false },
      { text: "في الثاني من محرم", correct: false },
      { text: "في الثاني عشر من ربيع الأول", correct: true },
      { text: "في السابع من شوال", correct: false },
    ],
  },
  {
    id: 5,
    question: "كم كان عمر النبي عندما توفي والده؟",
    answers: [
      { text: "كان رضيعا", correct: false },
      { text: "كان جنينا في بطن أمه", correct: true },
      { text: "كان طفلا", correct: false },
      { text: "كان شابا", correct: false },
    ],
  },
  {
    id: 6,
    question: "ما اسم عمه الذي كفله وحماه من المشركين؟",
    answers: [
      { text: "أبو لهب", correct: false },
      { text: "أبو جهل", correct: false },
      { text: "أبو طالب", correct: true },
      { text: "أبو عبيدة", correct: false },
    ],
  },
  {
    id: 7,
    question: "ما اسم زوجة النبي صلى الله عليه وسلم؟",
    answers: [
      { text: "خديجة بنت خويلد", correct: true },
      { text: "فاطمة بنت قبيس", correct: false },
      { text: "مريم بنت الزبير", correct: false },
      { text: "الخنساء", correct: false },
    ],
  },
  {
    id: 8,
    question: "ما اسم الغار الذي كان النبي يعبد ربه فيه؟",
    answers: [
      { text: "غار ثور", correct: false },
      { text: "غار علقمة", correct: false },
      { text: "غار حراء", correct: true },
      { text: "غار تميم", correct: false },
    ],
  },
  {
    id: 9,
    question: "كم كان عمر النبي عندما نزل عليه الوحي؟",
    answers: [
      { text: "41 سنة", correct: true },
      { text: "50 سنة", correct: false },
      { text: "60 سنة", correct: false },
      { text: "44 سنة", correct: false },
    ],
  },
  {
    id: 10,
    question: "ما اسم ملك الوحي الذي نزل على النبي في الغار؟",
    answers: [
      { text: "ميكائيل", correct: false },
      { text: "جبريل", correct: true },
      { text: "إسرافيل", correct: false },
      { text: "ملك الجبال", correct: false },
    ],
  },
  {
    id: 11,
    question: "من أول من أسلم من النساء؟",
    answers: [
      { text: "فاطمة بنت قبيس", correct: false },
      { text: "عائشة بنت أبي بكر", correct: false },
      { text: "زينب أم المساكين", correct: false },
      { text: "خديجة بنت خويلد", correct: true },
    ],
  },
  {
    id: 12,
    question: "من أول من أسلم من الصبيان؟",
    answers: [
      { text: "علي بن أبي طالب", correct: true },
      { text: "زيد بن حارثة", correct: false },
      { text: "عبدالله بن عمر", correct: false },
      { text: "عبدالله بن عباس", correct: false },
    ],
  },
  {
    id: 13,
    question: "من أول من أسلم من الرجال؟",
    answers: [
      { text: "عثمان بن عفان", correct: false },
      { text: "عبدالله بن مسعود", correct: false },
      { text: "أبو بكر الصديق", correct: true },
      { text: "عمر بن الخطاب", correct: false },
    ],
  },
  {
    id: 14,
    question: "ما اسم القبيلة التي حاربت النبي صلى الله عليه وسلم؟",
    answers: [
      { text: "بنو تميم", correct: false },
      { text: "ثقيف", correct: false },
      { text: "قريش", correct: true },
      { text: "بنو قيس", correct: false },
    ],
  },
  {
    id: 15,
    question: "ما اسم الصحابي الذي قاد المسلمين إلى الحبشة؟",
    answers: [
      { text: "أبو عبيدة بن الجراح", correct: false },
      { text: "حذيفة بن اليمان", correct: false },
      { text: "جعفر بن أبي طالب", correct: true },
      { text: "سعد بن معاذ", correct: false },
    ],
  },
  {
    id: 16,
    question: "من هو الصحابي الذي قام بجمع القرآن في عهد أبي بكر الصديق؟",
    answers: [
      { text: "عمر بن الخطاب", correct: false },
      { text: "عثمان بن عفان", correct: false },
      { text: "أبو بكر الصديق", correct: false },
      { text: "زيد بن ثابت", correct: true },
    ],
  },
  {
    id: 17,
    question: "من هو الصحابي الذي أعطي لقب أسد الله الغالب؟",
    answers: [
      { text: "عمر بن الخطاب", correct: false },
      { text: "خالد بن الوليد", correct: true },
      { text: "علي بن أبي طالب", correct: false },
      { text: "عثمان بن عفان", correct: false },
    ],
  },
  {
    id: 18,
    question: "ماذا كان يلقب الصحابي خالد بن الوليد؟",
    answers: [
      { text: "سيف الله المسلول", correct: true },
      { text: "سيف الدين", correct: false },
      { text: "أمير المؤمنين", correct: false },
      { text: "حمزة الله المسلول", correct: false },
    ],
  },
  {
    id: 19,
    question: "من هو الصحابي الذي قام بفتح مصر؟",
    answers: [
      { text: "عمر بن الخطاب", correct: false },
      { text: "عمرو بن العاص", correct: true },
      { text: "خالد بن الوليد", correct: false },
      { text: "أبو بكر الصديق", correct: false },
    ],
  },
  {
    id: 20,
    question: "من هو الصحابي الذي أسلم بعد فتح مكة؟",
    answers: [
      { text: "علي بن أبي طالب", correct: false },
      { text: "خالد بن الوليد", correct: false },
      { text: "عمر بن الخطاب", correct: false },
      { text: "أبو سفيان بن حرب", correct: true },
    ],
  },
  {
    id: 21,
    question: "من هو الصحابي الذي لقب بالصديق؟",
    answers: [
      { text: "أبو بكر الصديق", correct: true },
      { text: "عثمان بن عفان", correct: false },
      { text: "عبدالله بن عمر", correct: false },
      { text: "علي بن أبي طالب", correct: false },
    ],
  },
  {
    id: 22,
    question: "من هو الصحابي الذي أسلم في سن العاشرة؟",
    answers: [
      { text: "أبو بكر الصديق", correct: false },
      { text: "عمر بن الخطاب", correct: false },
      { text: "علي بن أبي طالب", correct: false },
      { text: "عبدالله بن عمر", correct: true },
    ],
  },
  {
    id: 23,
    question: "من هو الصحابي الذي تولى الخلافة بعد عمر بن الخطاب؟",
    answers: [
      { text: "أبو بكر الصديق", correct: false },
      { text: "علي بن أبي طالب", correct: false },
      { text: "أبو عبيدة بن الجراح", correct: false },
      { text: "عثمان بن عفان", correct: true },
    ],
  },
  {
    id: 24,
    question: "من هو الصحابي الذي نزلت فيه آية الرجم؟",
    answers: [
      { text: "عثمان بن عفان", correct: false },
      { text: "علي بن أبي طالب", correct: true },
      { text: "عمر بن الخطاب", correct: false },
      { text: "أبو بكر الصديق", correct: false },
    ],
  },
  {
    id: 25,
    question: "من هو الصحابي الذي كان يلقب بـ 'سيد الشهداء'؟",
    answers: [
      { text: "علي بن أبي طالب", correct: true },
      { text: "عثمان بن عفان", correct: false },
      { text: "أبو بكر الصديق", correct: false },
      { text: "عمر بن الخطاب", correct: false },
    ],
  },
  {
    id: 26,
    question: "من هو الصحابي الذي شهد غزوة بدر والعقبة وخيبر وخندق؟",
    answers: [
      { text: "علي بن أبي طالب", correct: true },
      { text: "عثمان بن عفان", correct: false },
      { text: "عمر بن الخطاب", correct: false },
      { text: "أبو بكر الصديق", correct: false },
    ],
  },
  {
    id: 27,
    question: "من هو الصحابي الذي توفي على فراش النبي صلى الله عليه وسلم؟",
    answers: [
      { text: "عمر بن الخطاب", correct: false },
      { text: "علي بن أبي طالب", correct: false },
      { text: "عثمان بن عفان", correct: true },
      { text: "أبو بكر الصديق", correct: false },
    ],
  },
  {
    id: 28,
    question: "من هو الصحابي الذي تولى الخلافة بعد عثمان بن عفان؟",
    answers: [
      { text: "عمر بن الخطاب", correct: false },
      { text: "علي بن أبي طالب", correct: true },
      { text: "أبو بكر الصديق", correct: false },
      { text: "عبدالله بن عمر", correct: false },
    ],
  },
];

export const shuffleArray = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};

const shuffledQuestions = shuffleArray(data);
export default shuffledQuestions;
