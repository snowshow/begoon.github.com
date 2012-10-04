function tape_file() {
var file = {
name: "TENNIS.RK",
start: 0x4000,
end: 0x47ff,
entry: 0x4000,
image:
"\x00\x21\xEE\x45\xCD\x18\xF8\xCD\x03\xF8\x4F\xCD\x09\xF8\xD6\x30\x32\xED\x45\xCD\x03\xF8\x97\x32\x1F\x45\x32\x20\x45\x32\x21\x45" +
"\x32\x22\x45\x3E\x01\x32\x23\x45\x3E\x01\x32\x4F\x45\x3E\xFF\x32\x4E\x45\x3E\x37\x32\x52\x45\x3A\x3D\x45\x32\x53\x45\x21\x2A\x45" +
"\xCD\x18\xF8\x97\x32\x01\x45\x0E\x17\x06\x00\xCD\x09\xF8\x04\x78\xFE\x39\xC2\x4B\x40\x06\x00\x21\x31\x45\xCD\x18\xF8\x04\x78\xFE" +
"\x18\xC2\x57\x40\x21\x2B\x45\xCD\x18\xF8\x06\x00\x21\x31\x45\xCD\x18\xF8\x04\x78\xFE\x18\xC2\x6C\x40\x21\x02\x45\xCD\x18\xF8\x21" +
"\x0B\x45\xCD\x18\xF8\x3A\x23\x45\xFE\x04\xCA\x18\x41\xF6\x30\x32\x28\x45\x21\x24\x45\xCD\x18\xF8\x21\x35\x45\xCD\x18\xF8\x16\x00" +
"\x06\x00\x0E\x17\xCD\x09\xF8\x04\x78\xFE\x39\xC2\xA2\x40\x0E\x0D\xCD\x09\xF8\x0E\x0A\xCD\x09\xF8\x14\x7A\xFE\x04\xC2\xA0\x40\x21" +
"\x3A\x45\xCD\x18\xF8\x11\x7D\x45\xCD\xE0\x40\x11\x8B\x45\xCD\xE0\x40\x11\x99\x45\xCD\xE0\x40\x11\xA7\x45\xCD\xE0\x40\xC3\xB6\x41" +
"\x21\x6E\x45\x7E\xB7\xC8\xEB\x77\xEB\x23\x13\xC3\xE3\x40\x3A\x23\x45\x3C\xFE\x04\xCA\x18\x41\x32\x23\x45\xF6\x30\x32\x28\x45\x21" +
"\x24\x45\xCD\x18\xF8\x3E\x01\x32\x4F\x45\x3E\xFF\x32\x4E\x45\x21\x94\x41\xCD\x5D\x41\xC3\xB7\x41\x00\x00\x00\x3A\x1A\x45\x32\x52" +
"\x41\x3A\x1B\x45\x32\x53\x41\x3A\x1C\x45\x32\x54\x41\x3A\x1D\x45\x32\x55\x41\x21\x42\x41\xCD\x18\xF8\xCD\x03\xF8\xCD\x03\xF8\xC3" +
"\x00\x40\x1F\x1B\x59\x2A\x30\x77\x79\x20\x6E\x61\x62\x72\x61\x6C\x69\x20\x30\x30\x30\x34\x20\x6F\x7E\x6B\x6F\x77\x00\xF5\xC5\xD5" +
"\x46\x23\x4E\x23\x5E\x23\x78\xFE\x00\xC2\x70\x41\xD1\xC1\xF1\xC9\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x1D\xC2\x73\x41\xC3" +
"\x60\x41\x40\x03\x01\x00\x5A\x04\x01\x35\x03\x01\x50\x03\x01\x00\x60\x07\x01\x00\x80\x80\xFF\x80\x80\xFF\x80\x20\xFF\x80\x80\xFF" +
"\x68\x80\xFF\x6C\x20\xFF\x6C\x80\xFF\x7A\x20\xFF\x7A\x40\xFF\x80\x20\xFF\x7A\x80\xFF\x00\x00\xCD\xCA\x41\xFE\x01\xCA\xEE\x40\xFE" +
"\x02\xCA\x28\x40\xCD\x87\x43\xC3\xB7\x41\x21\x50\x45\xCD\x18\xF8\x3A\x53\x45\x32\x5D\x45\x3A\x52\x45\x32\x5C\x45\xCD\x4C\x44\x3A" +
"\x53\x45\x47\x3A\x4F\x45\x80\x32\x53\x45\xFE\x58\xFA\x06\x42\x21\x82\x41\xCD\x5D\x41\x3E\x58\x32\x53\x45\x3A\x4F\x45\x47\x97\x90" +
"\x32\x4F\x45\xC3\x1F\x42\xFE\x21\xF2\x1F\x42\x21\x82\x41\xCD\x5D\x41\x3E\x22\x32\x53\x45\x3A\x4F\x45\x47\x97\x90\x32\x4F\x45\x3A" +
"\x52\x45\x47\x3A\x4E\x45\x80\x32\x52\x45\xFE\x21\xC2\x3D\x42\x3E\x01\x32\x4E\x45\x21\x82\x41\xCD\x5D\x41\xC3\xB9\x42\x3A\x52\x45" +
"\xFE\x28\xCA\x57\x42\xFE\x27\xCA\x5F\x42\xFE\x26\xCA\x67\x42\xFE\x25\xCA\x6F\x42\xC3\xB9\x42\x11\x7D\x45\x3E\x01\xC3\x74\x42\x11" +
"\x8B\x45\x3E\x02\xC3\x74\x42\x11\x99\x45\x3E\x03\xC3\x74\x42\x11\xA7\x45\x3E\x04\x01\xB5\x45\x32\x00\x45\x3A\x53\x45\xD6\x21\x81" +
"\x4F\x0A\x83\x5F\x1A\xB7\xCA\xB9\x42\xC6\x20\x32\x68\x45\x97\x12\x3A\x52\x45\x32\x67\x45\x21\x65\x45\xCD\x18\xF8\x21\x86\x41\xCD" +
"\x5D\x41\x3A\x4E\x45\x47\x97\x90\x32\x4E\x45\x21\x5A\x45\xCD\x18\xF8\x97\x3A\x00\x45\xCD\x15\x43\xC9\x21\x5A\x45\xCD\x18\xF8\x3A" +
"\x52\x45\xFE\x37\xCA\xC9\x42\x97\xC9\x3A\x3D\x45\xD6\x20\x47\x3A\x53\x45\xD6\x20\xB8\xFA\x0D\x43\x78\xC6\x05\x47\x3A\x53\x45\xD6" +
"\x20\xB8\xF2\x0D\x43\x3E\xFF\x32\x4E\x45\x3A\x3D\x45\xD6\x20\xC6\x02\x47\x3A\x53\x45\xD6\x20\x90\x47\x3A\x4F\x45\x80\x32\x4F\x45" +
"\x21\x90\x41\xCD\x5D\x41\x3E\xFF\x32\x4E\x45\x97\xC9\x3E\xFF\x32\x4E\x45\x3E\x01\xC9\xB7\xC8\x21\x22\x45\x86\xFE\x0A\x77\xFA\x50" +
"\x43\xD6\x0A\x77\x3A\x21\x45\x3C\xFE\x0A\x32\x21\x45\xC2\x50\x43\x97\x32\x21\x45\x3A\x20\x45\x3C\x32\x20\x45\xC2\x50\x43\x97\x32" +
"\x20\x45\x3A\x1F\x45\x3C\x32\x1F\x45\xC2\x50\x43\x97\x32\x1F\x45\x3A\x1F\x45\xF6\x30\x32\x1A\x45\x3A\x20\x45\xF6\x30\x32\x1B\x45" +
"\x3A\x21\x45\xF6\x30\x32\x1C\x45\x3A\x22\x45\xF6\x30\x32\x1D\x45\x21\x16\x45\xCD\x18\xF8\x3A\x01\x45\x3C\x32\x01\x45\xFE\x38\xC2" +
"\x85\x43\x3E\x02\xC9\x97\xC9\xCD\x12\x44\xCD\x3E\x44\xFE\x31\xC2\x97\x43\x3E\xFF\xC3\xE3\x43\xFE\x32\xC2\xA1\x43\x3E\xFE\xC3\xE3" +
"\x43\xFE\x33\xC2\xAB\x43\x3E\xFD\xC3\xE3\x43\xFE\x34\xC2\xB5\x43\x3E\xFC\xC3\xE3\x43\xFE\x30\xC2\xBF\x43\x3E\x01\xC3\xE3\x43\xFE" +
"\x39\xC2\xC9\x43\x3E\x02\xC3\xE3\x43\xFE\x38\xC2\xD3\x43\x3E\x03\xC3\xE3\x43\xFE\x37\xC2\xDD\x43\x3E\x04\xC3\xE3\x43\xFE\x03\xCA" +
"\x00\xF8\xC9\x47\x3A\x3D\x45\x80\xD6\x20\xFE\x01\xF2\xF4\x43\x3E\x01\xC3\xFB\x43\xFE\x34\xFA\xFB\x43\x3E\x34\xC6\x20\x32\x3D\x45" +
"\xF5\x21\x44\x45\xCD\x18\xF8\x21\x3A\x45\xCD\x18\xF8\xF1\x32\x47\x45\xC9\xCD\x1B\xF8\xFE\xFF\xC2\x28\x44\x32\x3D\x44\xF5\x3E\x4F" +
"\x3D\x00\x00\xC2\x20\x44\xF1\xC9\x47\x3A\x3D\x44\xB8\xC8\x3E\x03\xB8\xCA\x00\xF8\x78\x32\x3C\x44\x32\x3D\x44\xC9\xFF\x34\x3A\x3C" +
"\x44\xFE\xFF\xC8\x47\x3E\xFF\x32\x3C\x44\x78\xC9\x3A\xED\x45\x47\x0E\x10\xC5\xCD\x12\x44\xC1\x0D\xC2\x52\x44\x05\xC2\x50\x44\xC9" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x01\x03\x1B\x59\x27\x5B\x73\x7E\x65\x74\x00\x1B\x59\x23\x5A\x70\x61\x72\x74\x69\x71\x00\x1B\x59\x29\x5B\x30\x30\x30\x34\x00\x00" +
"\x00\x00\x04\x03\x1B\x59\x25\x5C\x33\x00\x1F\x1B\x59\x20\x20\x17\x00\x1A\x08\x17\x00\x1B\x59\x25\x20\x00\x1B\x59\x38\x3A\x17\x17" +
"\x17\x17\x17\x00\x1B\x59\x38\x3A\x20\x20\x20\x20\x20\x00\xFF\xFF\x1B\x59\x37\x42\x4F\x1B\x59\x20\x20\x00\x1B\x59\x36\x43\x20\x1B" +
"\x59\x20\x20\x00\xFF\x1B\x59\x27\x51\x20\x20\x20\x20\x00\x01\x05\x09\x0D\x11\x15\x19\x1D\x21\x25\x29\x2D\x31\x35\x00\x01\x05\x09" +
"\x0D\x11\x00\x19\x1D\x21\x25\x29\x2D\x00\x35\x01\x05\x09\x0D\x11\x15\x19\x1D\x21\x25\x29\x2D\x00\x35\x01\x05\x09\x0D\x11\x15\x19" +
"\x1D\x21\x25\x29\x2D\x31\x35\x01\x05\x09\x0D\x11\x15\x19\x1D\x21\x25\x29\x2D\x31\x35\x00\x00\x00\x00\x01\x01\x01\x01\x02\x02\x02" +
"\x02\x03\x03\x03\x03\x04\x04\x04\x04\x05\x05\x05\x05\x06\x06\x06\x06\x07\x07\x07\x07\x08\x08\x08\x08\x09\x09\x09\x09\x0A\x0A\x0A" +
"\x0A\x0B\x0B\x0B\x0B\x0C\x0C\x0C\x0C\x0D\x0D\x0D\x0D\x01\x1F\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x70\x72\x6F\x67\x72\x61\x6D\x6D\x75\x20\x6E\x61\x70\x69\x73\x61\x6C\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x70\x65\x6E\x6B\x69\x6E\x20\x77\x2E\x6E\x2E\x0D\x0A\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x6C\x65\x6E\x69\x6E\x67\x72\x61\x64\x20\x31\x39\x38\x36\x20" +
"\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x54\x2E\x32\x31\x38\x2D\x30\x34" +
"\x2D\x37\x35\x0D\x0A\x0A\x0A\x0A\x20\x20\x74\x74\x74\x74\x74\x20\x20\x65\x65\x65\x65\x65\x20\x20\x6E\x20\x20\x20\x6E\x20\x20\x6E" +
"\x20\x20\x20\x6E\x20\x20\x69\x20\x20\x20\x69\x20\x20\x20\x73\x73\x73\x73\x0D\x0A\x20\x20\x20\x20\x74\x20\x20\x20\x20\x65\x20\x20" +
"\x20\x20\x20\x20\x6E\x20\x20\x20\x6E\x20\x20\x6E\x20\x20\x20\x6E\x20\x20\x69\x20\x20\x69\x69\x20\x20\x73\x20\x20\x20\x20\x0D\x0A" +
"\x20\x20\x20\x20\x74\x20\x20\x20\x20\x65\x65\x65\x65\x20\x20\x20\x6E\x6E\x6E\x6E\x6E\x20\x20\x6E\x6E\x6E\x6E\x6E\x20\x20\x69\x20" +
"\x69\x20\x69\x20\x20\x73\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x74\x20\x20\x20\x20\x65\x20\x20\x20\x20\x20\x20\x6E\x20\x20\x20" +
"\x6E\x20\x20\x6E\x20\x20\x20\x6E\x20\x20\x69\x69\x20\x20\x69\x20\x20\x73\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x74\x20\x20\x20" +
"\x20\x65\x65\x65\x65\x65\x20\x20\x6E\x20\x20\x20\x6E\x20\x20\x6E\x20\x20\x20\x6E\x20\x20\x69\x20\x20\x20\x69\x20\x20\x20\x73\x73" +
"\x73\x73\x0D\x0A\x0A\x0A\x0A\x75\x70\x72\x61\x77\x6C\x65\x6E\x69\x65\x20\x72\x61\x6B\x65\x74\x6B\x6F\x6A\x20\x6B\x6C\x61\x77\x69" +
"\x7B\x61\x6D\x69\x20\x31\x2C\x32\x2C\x33\x2C\x34\x2D\x77\x6C\x65\x77\x6F\x0A\x0D\x30\x2C\x39\x2C\x38\x2C\x37\x2D\x77\x70\x72\x61" +
"\x77\x6F\x2E\x77\x73\x65\x67\x6F\x20\x75\x20\x77\x61\x73\x20\x33\x20\x70\x6F\x70\x79\x74\x6B\x69\x2E\x0A\x0A\x0D\x76\x20\x65\x20" +
"\x6C\x20\x61\x20\x60\x20\x20\x20\x75\x20\x64\x20\x61\x20\x7E\x20\x69\x20\x21\x20\x21\x20\x21\x0D\x0A\x0A\x0A\x0A\x20\x20\x20\x20" +
"\x20\x77\x77\x65\x64\x69\x20\x73\x6B\x6F\x72\x6F\x73\x74\x78\x20\x7B\x61\x72\x69\x6B\x61\x20\x28\x31\x2D\x35\x29\x3A\x00\x00\x00"};
ui.file_loaded(file);
}
tape_file();