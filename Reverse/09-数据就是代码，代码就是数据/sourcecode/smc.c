#include<stdio.h>
#include<memory.h>
#include<string.h>
#include<stdlib.h>
#include<Memoryapi.h>

//flag{6L2v5Lu25bel56iL54uX6YO95LiN5a2m==}
//40 chars
int enc_flag[] = {70, 76, 65, 71, 91, 22, 108, 18, 86, 21, 108, 85, 18, 21, 66, 69, 76, 21, 22, 73, 108, 21, 20, 85, 120, 22, 121, 111, 25, 21, 108, 73, 110, 21, 65, 18, 77, 29, 29, 93};

/*
unsigned char init_array[] =
{
  0x55, 0x48, 0x89, 0xE5, 0x48, 0x83, 0xEC, 0x10, 0x48, 0x89, 
  0x4D, 0x10, 0x48, 0x89, 0x55, 0x18, 0xC7, 0x45, 0xFC, 0x00, 
  0x00, 0x00, 0x00, 0xEB, 0x32, 0x8B, 0x45, 0xFC, 0x48, 0x63, 
  0xD0, 0x48, 0x8B, 0x45, 0x10, 0x48, 0x01, 0xD0, 0x0F, 0xB6, 
  0x00, 0x83, 0xF0, 0x20, 0x89, 0xC1, 0x8B, 0x45, 0xFC, 0x48, 
  0x63, 0xD0, 0x48, 0x8B, 0x45, 0x18, 0x48, 0x01, 0xD0, 0x0F, 
  0xB6, 0x00, 0x38, 0xC1, 0x74, 0x05, 0x8B, 0x45, 0xFC, 0xEB, 
  0x0F, 0x83, 0x45, 0xFC, 0x01, 0x83, 0x7D, 0xFC, 0x27, 0x7E, 
  0xC8, 0xB8, 0x00, 0x00, 0x00, 0x00, 0x48, 0x83, 0xC4, 0x10, 
  0x5D, 0xC3
};*/ //before xor

unsigned char init_array[] = {85, 73, 139, 230, 76, 134, 234, 23, 64, 128, 71, 27, 68, 132, 91, 23, 215, 84, 238, 19, 20, 21, 22, 252, 42, 146, 95, 231, 84, 126, 206, 87, 171, 100, 50, 107, 37, 245, 41, 145, 40, 170, 218, 11, 165, 236, 165, 106, 204, 121, 81, 227, 124, 190, 115, 47, 112, 56, 234, 52, 138, 61, 6, 254, 52, 68, 201, 6, 184, 174, 73, 196, 13, 181, 75, 200, 49, 177, 105, 49, 152, 233, 82, 83, 84, 85, 30, 212, 156, 73, 7, 152};

DWORD tmp = 0x40;

int main()
{
    if(VirtualProtect(&init_array,0x4000u,0x40,&tmp)) {
        printf("Security Mode Control success.\n");
    }
    char input[100];
    char* enc = (char*) malloc(sizeof(char)*100);
    for (int i = 0; i < 100; ++i) {
        enc[i] = enc_flag[i];
    }
    scanf("%s", input);
    int (*func)(char*, char*);
    for(int i = 0; i < 92; ++i) {
        init_array[i] ^= i;
    }
    func = (int(*)(char*, char*))init_array;
    if ((*func)(input, enc_flag)) {
        printf("Accept!");
    } else {
        printf("flag{th15_1s_a_f@ke_f1ag}");
    }
    return 0;
}