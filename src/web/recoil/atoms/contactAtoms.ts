import { atom } from 'recoil';
import { initContact } from '../../models/contactObject';

export const contactState = atom({
  key: 'ContactState',
  default: initContact(),
});
