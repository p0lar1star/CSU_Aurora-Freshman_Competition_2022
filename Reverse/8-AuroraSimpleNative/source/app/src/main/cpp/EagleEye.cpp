//
// Created by Dreamstalker on 2022/1/23.
//

#include "logger.h"

#include <jni.h>
#include <cstring>
#include <memory>

using std::unique_ptr;

static constexpr size_t MIN_INPUT_LEN = 6; // strlen("actf{}") == 6
static constexpr size_t INPUT_START_INDEX = 5;

__attribute__((visibility("hidden")))
const char Flag[] = "actf{Native_is_not_Naive}";

__attribute__((visibility("hidden")))
bool doEagleCheck(const unique_ptr<char[]>& input){
    return strcmp(input.get(),Flag) == 0;
}

extern "C"
JNIEXPORT jboolean JNICALL
Java_bin_gstalker_aurora_1simplenative_EagleEye_check(JNIEnv *env, jclass clazz, jstring input_) {
    auto* temp = env->GetStringUTFChars(input_,nullptr);
    size_t inputLen = strlen(temp);
    unique_ptr<char[]> input(new char[inputLen + 0x10]);
    memset(input.get(),0,inputLen + 0x10);
    strncpy(input.get(),temp,inputLen);
    env->ReleaseStringUTFChars(input_,temp);
    if(doEagleCheck(input)){
        return JNI_TRUE;
    }
    return JNI_FALSE;
}