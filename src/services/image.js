import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from 'src/boot/firebase';
import { readAndCompressImage } from 'browser-image-resizer';
// uuid 라이브러리 설치 npm i uuid

import { v4 as uuidv4 } from 'uuid';

export async function uploadImage(file) {
  // 파일 저장 경로 및 저장 이름 형식
  const filename = `images/${uuidv4()}.${getExtention(file.name)}`;

  //스토리치 객체 및 URL
  const storageRef = ref(storage, filename);
  //   console.log('filename : ', filename);
  //용량 줄이기
  const thumbnail = await compressImage(file);

  //파일 업로드
  const uploadResult = await uploadBytes(storageRef, thumbnail);

  //파일 등록시 미리보기 URL
  const downloadURL = await getDownloadURL(uploadResult.ref);

  // npm i browser-image-resizer 사진 용량 조절

  //   console.log('downloadURL :', downloadURL);
  return downloadURL;
}
//확장자 가져오기
function getExtention(filename) {
  //.을 기준으로 나누고(split-나누고 배열로 담음) 맨 뒤에있는 값을 가져옴(pop)
  return filename.split('.').pop();
}

async function compressImage(file) {
  return readAndCompressImage(file, {
    quality: 0.8,
  });
}
