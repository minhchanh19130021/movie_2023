import { useState } from 'react';
import { Rating } from '~/components/Rating';
import { Review } from '~/components/Review';

function ServerError() {
    return (
        <div className="flex h-full flex-wrap items-center justify-center bg-black py-12">
            <div className="my-5 text-center">
                <h1 className="text-8xl	font-semibold text-white">500</h1>
                <div className="my-5">
                    <h3 class="text-xl font-medium text-gray-300">Lỗi Server! không thể hoạt động</h3>
                    <p class="text-md mt-2 pb-4 text-xl text-gray-600">Server Error! can't work</p>
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
export default ServerError;
