#include<stdio.h>
#include<stdlib.h>
static char buf[0x100];
static void(*p)();
void byebye() {
	puts("\nSee you at AuroraLab, bye~");
	return;
}

void getflag(){
	puts("\nOh, you find me");
	system("/bin/sh");
}

int main() {
	setvbuf(stdin, 0LL, 2, 0LL);
	setvbuf(stdout, 0LL, 2, 0LL);
	setvbuf(stderr, 0LL, 2, 0LL);
	p = byebye;
	printf("Welcome to bssoverflow lab!\n");
	puts("This is a simple overflow-experiment.");
	printf("Firstly, what's your name? ");
	gets(buf);
	printf("Oh, you are ");
	printf(buf);
	printf("\nNow plz try to get flag:");
	gets(buf);
	(*p)();
	return 0;
}
