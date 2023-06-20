package com.fit.nlu.backend.enums;

public enum MovieStatus {
    COMING_SOON(0),
    NOW_SHOWING(1),
    END_SHOWING(2);

    MovieStatus(int i) {
    }
    static Integer getValue(String enumString){
        return valueOf(enumString).ordinal();
    }
}
