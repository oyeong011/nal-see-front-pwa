import { Feed } from '@/types/feed';

export const feedData: Feed[] = [];

const userNames = [
  '홍길동',
  '김철수',
  '김영희',
  '이영희',
  '박철수',
  '이철수',
  '박영희',
  '이길동',
  '김길동',
  '박길동',
];

const descriptions = [
  '오늘 비도 많이오고 추워서 두틈하게 코트랑 우산챙겨서 나왔어요. 여러분도 비 맞지 않게 조심하세요!',
  '오늘은 날씨가 좋네요. 햇살도 따뜻하고 바람도 시원해요. 산책하기 딱 좋은 날씨네요.',
  '오늘은 덥네요. 더위 조심하세요!',
  '오늘은 추워요. 따뜻하게 입고 나가세요.',
  '오늘은 눈이 많이 오네요. 미끄럼 조심하세요.',
  '오늘은 바람이 많이 불어요. 모자 꼭 쓰고 다니세요.',
  '오늘은 날씨가 좋네요. 햇살도 따뜻하고 바람도 시원해요. 산책하기 딱 좋은 날씨네요.',
  '오늘은 덥네요. 더위 조심하세요!',
  '오늘은 추워요. 따뜻하게 입고 나가세요.',
  '오늘은 눈이 많이 오네요. 미끄럼 조심하세요.',
];

const places = [
  '서울시 강남구',
  '서울시 강북구',
  '서울시 강서구',
  '서울시 강동구',
  '서울시 중구',
  '서울시 용산구',
  '서울시 성동구',
  '서울시 성북구',
  '서울시 동대문구',
  '서울시 동작구',
];

const uploadTimes = [
  '2024-03-10 10:10:10',
  '2024-03-11 10:10:10',
  '2024-03-12 10:10:10',
  '2024-03-13 10:10:10',
  '2024-03-14 10:10:10',
  '2024-03-15 10:10:10',
  '2024-03-16 10:10:10',
  '2024-03-17 10:10:10',
  '2024-03-18 10:10:10',
  '2024-03-19 10:10:10',
];

for (let i = 1; i <= 100; i++) {
  feedData.push({
    id: i.toString(),
    userId: i,
    username: userNames[i % userNames.length],
    userImage: 'https://placeholder.co/92x62',
    place: places[i % places.length],
    createDate: uploadTimes[i % uploadTimes.length],
    content: descriptions[i % descriptions.length],
    pictureList: 'https://placehold.co/350x265',
    isLiked: false,
    likeCnt: 0,
    weather: '맑음',
  });
}
