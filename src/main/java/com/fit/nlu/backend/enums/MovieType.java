package com.fit.nlu.backend.enums;

public enum MovieType {
    PHIM_KINH_DI(0),
    PHIM_CHIEU_RAP(1),
    PHIM_HOAT_HINH(2);

    MovieType(int i) {
    }
    static Integer getType(String enumString){
        return valueOf(enumString).ordinal();
    }
}
