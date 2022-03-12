#include<stdio.h>
#include <stdlib.h>
#include <string.h>
#include<malloc.h>
//actf{N0_Base64_Any__M0re!}

static char key = 0x67;
static char buf[0x1000];

// 全局常量定义
static char table[16] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'};
static unsigned char str[0x100];
static char cipher[0x100] = {99, 18, 100, 103, 98, 17, 99, 101, 97, 102, 96, 100, 97, 98, 100, 97, 100, 99, 98, 17, 99, 102, 97, 18, 96, 110, 98, 17, 98, 17, 99, 19, 100, 103, 96, 101, 97, 98, 101, 102};

void Fail() {
	printf("Fail...Try again!\n");
	system("pause");
	exit(-1);
}


int main() {
	printf("Welcome to solve reverse me!\n");
	printf("Try to input something and Enjoy!o((>w< ))o\n");
	char input[100];
	scanf("%100s", input);
	if ((strlen(input) != 26) || strncmp(input, "actf{", 5) || strncmp(&input[25], "}", 1)) {
		Fail();
	}
	memcpy(str, &input[5], 20);//取flag内容
	for (int i = 0, j = 0;; i += 2) {
		if (j >= 20) {
			break;
		}
		buf[i] = table[str[j] >> 4];
		buf[i + 1] = table[str[j++] & 0xf];
	}
	printf("%s\n", buf);
	int res = 0;
	int len = strlen(buf);
	for (int i = 0; i < len; i++) {
		res = (buf[i] ^ key) + 0x10;
		printf("%d ", res);
		if (res != cipher[i]) {
			printf("Fail.Try again!\n");
			Fail();
		}
	}
	printf("\nSuccess!o(n_n)o\n");
	system("pause");
	return 0;
}
