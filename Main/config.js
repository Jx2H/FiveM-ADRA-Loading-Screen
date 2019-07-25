var s_config = {};
// 재생 방식
// false = audio, true = video
var s_player = true;

/* 재생 랜덤 Or 순서재생
true = 랜덤, false = 순서재생
랜덤지정시 재생 리스트 속성값 first가 지정되어 있는경우 먼저 재생후 그 다음 랜덤으로 재생됩니다. */
var s_playtype = true;

/* 유튜브 재생 리스트
속성 first는 리스트중 true는 딱 한번만 지정되야 합니다.
그렇지 않을경우 모두 랜덤 및 순서 재생을 합니다. (s_playtype에 따름)
first: true, first: false */
var s_playlist = [
    {id:"L7kF4MXXCoA", first: false}
   ,{id:"KR-eV7fHNbM", first: false}
   ,{id:"6bdyffPwWrA", first: false}
   ,{id:"1LVgg1YoT6U", first: false}
   ,{id:"Ie6HDeML26s", first: false}
   ,{id:"yC-X3iDs9Zs", first: false}
];

//음악 볼륨
// 0 ~ 100
var s_player_volume = 50;

/* 재생 방식이 audio시 그림 출력 리스트
file/img 폴더 안에 있는 그림파일.확장자 를 입력해주세요.*/
var s_imglist = [
[
    "1.jpg"
   ,"2.jpg"
   ,"3.jpg"
   ,"4.jpg"
],
{
    random: true, // 사진 랜덤 trun, false
    fade: 1000, // 기존 사진과 변경될 사진 사이 전환 ms 값
    duration: 7000 // 사진 출력 유지 ms 값
}
];

// 로딩화면 텍스트 설정
var s_text = {
    h1: "서버에 오신 것을 환영합니다",
    messages: [
        "지루하고 않고 항상 재미있는 서버가 되도록 노력하겠습니다",
        "디스코드 참여는 필수입니다! https://discord.gg/@@@@@@",
        "행복하고 즐거운 서버입니다",
        "뚜루뚜루뚜루뚜루"
    ],
    message_random: true // 메세지 랜덤 출력 true, false
};

// ---
/* 고급 설정 */
// 수정후 오류생길시 해당 줄 삭제시 기본값 자동 지정됨.
s_config = {
    main_h1: '#main-h1', // html id
    main_message: '#main-message', // html id
    body: 'body', // html id
    music_name: '#music-name', // html id
    output_i: 0, // s_playlist > first 중복 감지 누적 수
    message_delay: 7000, // s_text > messages 출력 유지 ms
    message_fadeOut: 3000, // s_text > messages 아웃 유지 ms
    message_fadeIn: 2000, // s_text > messages 인 유지 ms
    plist_f: 0, // s_playlist > first false 오브젝트 인덱스
    start_asw: false, // 시작시 재생목록 추가후 다시 입력시 true 변경
    imglist_from: 'file/img/', // 파일이름 앞 src
    youtube_src: "https://www.youtube.com/iframe_api", // 유튜브 API
    youtube_vars: { // 유튜브 재생 매개변수
        controls:0,
        rel:0,
        fs:0,
        autohide:1,
        theme:'dark',
        disablekb:1,
        showinfo:0,
        autoplay:1
    },
    cursor_src: './file/cursor.png', // 이미지 커서 위치
    cursor_x: 14, // 오차범위
    cursor_y: -1, // 오차범위
    change_conte: false, // 메세지 시작 인
    aws_time: 6000, // 딜레이
    music_name_put: 2000, // #music-name 모든 ms
    error_string: "오류가 생겼습니다. 좌측 상단 스패너 아이콘을 눌러주세요", // 유튜브 재생에 오류가 뜨면 출력
    // ---
    developer: true // 하단 저작자표시
    // 위 설정 무단 조작시 당신은 저작권법 제 37조 위반하게 됩니다.
    // 또한, MIT 라이센스에 의해 출처를 꼭 표기해야 합니다.
    // 비활성화시 디스코드 AlDeRAn#0930 으로 문의하여 조작하는 것이 가장 바람직합니다.
    // 그외 모든 질문은 기달리고 있습니다.
    // ---  
};