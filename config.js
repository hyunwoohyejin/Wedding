/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이현우",
    nameEn: "Groom",
    father: "이주현",
    mother: "김정미",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김혜진",
    nameEn: "Bride",
    father: "김용설",
    mother: "김수복",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-26",
    time: "12:10",
    venue: "더컨벤션 송파문정점",
    hall: "그랜드볼룸홀 12층",
    address: "서울특별시 송파구 송파대로 155 NH송파농협",
    tel: "02-6418-5000",
    mapLinks: {
      kakao: "https://kko.to/sxs7OpIc3x",
      naver: "https://naver.me/F5sAPPIU"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n소중한 날, 함께 자리하시어 저희의\n시작을 따뜻하게 축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "열네 살의 풋풋한 만남은\n어느덧 서로의 가장 익숙한 계절이 되었습니다.\n\n함께 성장하며, 맞춰가는 법을 배우고,\n때로는 넘어지기도 했지만 다시\n손을 맞잡는 법도 배웠습니다.\n아직 미숙한 부분은 많지만, 앞으로도\n서로의 편이 되어 인생이라는 긴 여정을\n한 팀으로 걸어가려 합니다.\n\n\n축하 화한은 정중히 사양하오니\n너른 양해 부탁드립니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이현우", bank: "국민은행", number: "546901-01-172557" },
      { role: "아버지", name: "이주현", bank: "우리은행", number: "392-07-007191" },
      { role: "어머니", name: "김정미", bank: "농협은행", number: "204020-52-204197" }
    ],
    bride: [
      { role: "신부", name: "김혜진", bank: "신한은행", number: "110-232-355729" },
      { role: "아버지", name: "김용설", bank: "신한은행", number: "323-02-141397" },
      { role: "어머니", name: "김수복", bank: "신한은행", number: "110-289-139192" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "현우 ♥ 혜진 결혼합니다",
    description: "2026년 12월 26일, 소중한 분들을 초대합니다."
  }
};
