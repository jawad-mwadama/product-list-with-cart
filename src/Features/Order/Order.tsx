import Button from '../../Ui/Button';

function Order() {
  const click = () => alert('order confirmed');
  return (
    <div className="mx-2.5 flex items-center justify-center py-4 sm:mx-4">
      <Button type="primary" onClick={click} className="w-full">
        Confirm order
      </Button>
    </div>
  );
}

export default Order;
