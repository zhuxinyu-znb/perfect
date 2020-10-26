//组件内应用
import { contactObject, initContact } from '../../models/contactObject';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { contactState } from '../../recoil/atoms/contactAtoms';
import { sendEmail } from '../../recoil/selectors/contactSelectors';
import React from 'react';

function UserInfo() {
  const results = useRecoilValue(sendEmail);
  const getContactState: contactObject = useRecoilValue(contactState);
  return (
    <div>
      Results: {results}. Email: `{getContactState.email}`
    </div>
  );
}
