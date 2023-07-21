import React, { FC, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchValue, setSearchValue } from '../../redux/slices/filterSlice';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';

const Search: FC = () => {
   const dispatch = useDispatch()
   const [value, setValue] = React.useState('')
   const inputBlock = React.useRef<HTMLInputElement>(null);

   const onUpdateDebounce = useCallback(
      debounce((str: string) => {
         dispatch(setSearchValue(str))
      }, 250),
      [],
   )

   const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
      onUpdateDebounce(event.target.value)
   }


   return (
      <div className={styles.root}>
         <input type="text" placeholder='Поиск' className={styles.input} onChange={(event) => onChangeSearch(event)} value={value} />
         <div className={styles.icon}>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="white" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16_77)">
                  <path d="M20.7353 19.4958L14.7101 13.4663C15.8979 12.0418 16.6124 10.2213 16.6124 8.23301C16.6124 3.69689 12.8896 0.00860596 8.31048 0.00860596C3.73132 0.00860596 0 3.70119 0 8.23731C0 12.7734 3.72272 16.4617 8.30187 16.4617C10.2472 16.4617 12.0375 15.7946 13.4577 14.68L19.5045 20.7267C19.8574 21.0796 20.3824 21.0796 20.7353 20.7267C21.0882 20.3738 21.0882 19.8487 20.7353 19.4958ZM1.76452 8.23731C1.76452 4.67383 4.69966 1.77743 8.30187 1.77743C11.9041 1.77743 14.8392 4.67383 14.8392 8.23731C14.8392 11.8008 11.9041 14.6972 8.30187 14.6972C4.69966 14.6972 1.76452 11.7965 1.76452 8.23731Z" fill="white" />
               </g>
               <defs>
                  <clipPath id="clip0_16_77">
                     <rect width="21" height="21" fill="white" />
                  </clipPath>
               </defs>
            </svg>
         </div>
      </div>
   )
}

export default Search;