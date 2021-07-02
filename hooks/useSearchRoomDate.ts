import { useDispatch } from "react-redux";
import { useSelector } from "../store";
import { searchRoomActions } from "../store/searchRoom";

const useSearchRoomDate = () => {
  const checkInDate = useSelector((state) => state.searchRoom.checkInDate);
  const checkOutDate = useSelector((state) => state.searchRoom.checkOutDate);

  const dispatch = useDispatch();

  //* 체크인 날짜 변경 Dispatch
  const setCheckInDateDispatch = (date: Date | null) => {
    if (date) {
      dispatch(searchRoomActions.setCheckInDate(date.toISOString()));
    } else {
      dispatch(searchRoomActions.setCheckInDate(null));
    }
  };

  //* 체크아웃 날짜 변경 Dispatch
  const setCheckOutDateDispatch = (date: Date | null) => {
    if (date) {
      dispatch(searchRoomActions.setCheckOutDate(date.toISOString()));
    } else {
      dispatch(searchRoomActions.setCheckOutDate(null));
    }
  };

  return {
    checkInDate: checkInDate ? new Date(checkInDate) : null,
    checkOutDate: checkOutDate ? new Date(checkOutDate) : null,
    setCheckInDateDispatch,
    setCheckOutDateDispatch,
  };
};

export default useSearchRoomDate;
