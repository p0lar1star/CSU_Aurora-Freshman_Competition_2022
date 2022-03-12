#include<cstdio>
#include<iostream>
#include<string>
using namespace std;
//flag{sdssddwwddsssssddssaaaawaaass}

int main(void)
{
	string maze = "sxxxxxxxxxaaxaaaxxxxxaxaxaxxxxxaaaxaxxxxxxxxxaxxxxxxxxxaxxxxxxxxxaaaxxaaaaxxxaxxaxxaaaaaxxexxxxxxxxx";
	int pos = 0;
	string buf;
	cout << "Let us start a new adventure!" << endl;
	cout << "Enter route: ";
	cin >> buf;
	for (int i = 0; i < 29; ++i) {
		switch(buf[i]) {
			case 'w': pos -= 10; break;
			case 's': pos += 10; break;
			case 'a': pos -= 1; break;
			case 'd': pos += 1; break;
			default: cout << "Error"; return 0;
		}
		if (maze[pos] == 'e') {
			cout << "Your flag: flag{" << buf.substr(0, 29) << "}";
			return 0;
		}
	}
	cout << "Error";
	return 0;
}