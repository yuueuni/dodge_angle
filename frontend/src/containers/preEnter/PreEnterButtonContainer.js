import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PreEnterButton from '../../components/preEnter/PreEnterButton';
import { confirmTeamMates } from '../../modules/teamMates';

const PreEnterButtonContainer = () => {
  const dispatch = useDispatch()
  const { teamMates } = useSelector(({ teamMates }) => ({
    teamMates: teamMates.teamMates,
  }));
  useEffect(() => {
    // teamMates가 변화되었거나 첫 렌더링일때 useEffect는 실행
    if (teamMates) {
      // teamMates !== null 일때 => teamMates값을 로컬스토리지에 업데이트
      localStorage.setItem(
        "teamMates",
        JSON.stringify(
          teamMates.map(teamMate => ({
            id: teamMate.id,
            name: teamMate.name,
            pos: teamMate.pos,
            me: teamMate.me,
            ban: teamMate.ban,
            pick: teamMate.pick,
            mostChampions: teamMate.mostChampions,
          }))
        )
      );
    } else {
      // teamMates === null 일때
      if (localStorage.getItem("teamMates")) {
        // 로컬스토리 값이 존재 => 로컬스토리지 값을 Redux에 반영하기
        dispatch(confirmTeamMates(JSON.parse(localStorage.getItem("teamMates"))))
      }
    }
    },
    [teamMates]
  );
  return <PreEnterButton activated={Boolean(teamMates)} />;
};

export default PreEnterButtonContainer;
