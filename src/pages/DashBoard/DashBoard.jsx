import Item from '../../components/Item/Item';
import NavDash from '../../components/NavDash/NavDash';

function DashBoard() {
  return (
    <div className="overflow-hidden mt-10">
      <NavDash />
      <Item />
    </div>
  );
}

export default DashBoard;
