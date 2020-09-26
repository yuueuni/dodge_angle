import React, { useState } from 'react';
import PreEnterInput from '../../components/preEnter/PreEnterInput';
import { useDispatch, useSelector } from 'react-redux';
import { confirmTeamMates } from '../../modules/teamMates';

const PreEnterInputContainer = () => {
  const [innerTeamMates, setInnerTeamMates] = useState(``);
  const dispatch = useDispatch();
  const { teamMates } = useSelector(({ teamMates }) => ({
    teamMates: teamMates.teamMates,
  }));

  const onButtonClick = () => {
    if (innerTeamMates.length !== 0) {
      const parsedTeamMates = innerTeamMates
        .split('\n')
        .map((t) => t.trim().slice(0, -15))
        .slice(0, 5);
      const teamMatesArray = parsedTeamMates.map((teamMate) => ({
        id: parsedTeamMates.indexOf(teamMate),
        name: teamMate,
        pos: 'top',
        me: false,
        ban: null,
        pick: null,
      }));
      dispatch(confirmTeamMates(teamMatesArray));
    }
  };
  const onInputChange = (e) => {
    setInnerTeamMates(e.target.value);
  };
  const onInitClick = () => {
    dispatch(confirmTeamMates(null));
    setInnerTeamMates('');
  };

  return (
    <PreEnterInput
      teamMates={teamMates}
      innerTeamMates={innerTeamMates}
      onButtonClick={onButtonClick}
      onInputChange={onInputChange}
      onInitClick={onInitClick}
    />
  );
};

export default PreEnterInputContainer;
