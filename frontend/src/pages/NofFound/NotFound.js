import { useState } from 'react';
import { Rating } from '~/components/Rating';
import { Review } from '~/components/Review';

function NotFound() {
    return (
        <div className="flex h-full h-full flex-wrap items-center justify-center bg-black py-12 py-5">
            <div className="my-5 text-center">
                <h1 className="text-8xl	font-semibold text-white">404</h1>
                <div className="my-5">
                    <h3 class="text-xl font-medium text-gray-300">Trang này đã bị xóa hoặc không tồn tại!</h3>
                    <p class="text-md mt-2 pb-4 text-xl text-gray-600">This page could not be found</p>
                </div>
                <a
                    href="/"
                    className="cursor-pointer rounded-lg bg-[#ff6500] px-8 py-3 text-xl font-semibold leading-tight text-white hover:bg-[#ff6520]"
                >
                    Về trang chủ
                </a>
            </div>
        </div>
    );
}
export default NotFound;
