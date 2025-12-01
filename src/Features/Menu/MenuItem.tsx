import React from 'react';
import baklava from '../../assets/images/image-baklava-desktop.jpg';

function MenuItem() {
  return (
    <div className="py-5 font-redHat">
      <div className="">
        <img
          src={baklava}
          alt="baklava"
          className="h-42 rounded-lg hover:border-2 hover:border-red"
        />
        <p className="pt-1.5 text-sm text-stone-400">waffle</p>
        <h2 className="f font-semibold text-rose-900">Waffle with berries</h2>
        <span className="text-xl font-bold text-red">$ 6.20</span>
      </div>
    </div>
  );
}

export default MenuItem;
