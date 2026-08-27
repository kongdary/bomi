export type GalleryItem = { category: 'NAIL' | 'LASH' | 'MAKEUP'; image: string; title: string; description: string };
export const gallery: GalleryItem[] = [
  { category:'NAIL', image:'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1000&q=85', title:'Soft Nude', description:'차분하고 맑은 누드 컬러' },
  { category:'MAKEUP', image:'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85', title:'Daily Glow', description:'피부 결을 살린 데일리 메이크업' },
  { category:'LASH', image:'https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?auto=format&fit=crop&w=1000&q=85', title:'Natural Line', description:'눈매를 살리는 내추럴 래시' },
  { category:'NAIL', image:'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=85', title:'Cream Mood', description:'부드러운 크림 톤 아트' },
  { category:'MAKEUP', image:'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=85', title:'Special Day', description:'특별한 날을 위한 섬세한 터치' },
  { category:'NAIL', image:'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1000&q=85', title:'Peach Veil', description:'은은한 피치 베일 컬러' },
];
