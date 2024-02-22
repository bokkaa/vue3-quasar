export const useTag = options => {
  const { tags, updateTag, maxLengthMessage } = options || {};
  const addTag = newTag => {
    //newTag 이벤트핸들러(ex e)
    // 문자열이 아니라면 이벤트핸들러 역할을 하며
    // 문자열이라면 문자열 그대로 사용된다.
    const isEventHandler = typeof newTag !== 'string';
    const tagValue = isEventHandler
      ? // / /g, '' -> 공백제거
        //즉 newTag.target.value는 사용자가 입력한 값을 의미하며 이 값의 공백을 제거함을 의미
        newTag.target.value.replace(/ /g, '')
      : // 모든 문자열 공백제거
        newTag.replace(/ /g, '');

    if (!tagValue) {
      return;
    }

    if (tags.value.length >= 10) {
      Sq.notify(maxLengthMessage);
      return;
    }

    //기존에 등록된 태그가 아니라면
    if (tags.value.includes(tagValue) === false) {
      //기존에 있던 태그들과 새로추가된 태그를 방출
      // emit('update:tags', [...props.tags, tagValue]);
      updateTag([...tags.value, tagValue]);
    }
    if (isEventHandler) {
      newTag.target.value = '';
    }
  };

  const removeTag = index => {
    // 등록된 tags들을 배열로 담아두고
    const model = [...tags.value];
    //삭제
    model.splice(index, 1);
    // 삭제된 태그모음 데이터를 부모컴포넌트로 방출
    // emit('update:tags', model);
    updateTag(model);
  };

  return {
    addTag,
    removeTag,
  };
};
