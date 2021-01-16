/// <reference types="node" />
declare const _default: () => Promise<{
    default: typeof import("fs");
    rename: typeof import("fs").rename;
    renameSync(oldPath: import("fs").PathLike, newPath: import("fs").PathLike): void;
    truncate: typeof import("fs").truncate;
    truncateSync(path: import("fs").PathLike, len?: number | null | undefined): void;
    ftruncate: typeof import("fs").ftruncate;
    ftruncateSync(fd: number, len?: number | null | undefined): void;
    chown: typeof import("fs").chown;
    chownSync(path: import("fs").PathLike, uid: number, gid: number): void;
    fchown: typeof import("fs").fchown;
    fchownSync(fd: number, uid: number, gid: number): void;
    lchown: typeof import("fs").lchown;
    lchownSync(path: import("fs").PathLike, uid: number, gid: number): void;
    chmod: typeof import("fs").chmod;
    chmodSync(path: import("fs").PathLike, mode: import("fs").Mode): void;
    fchmod: typeof import("fs").fchmod;
    fchmodSync(fd: number, mode: import("fs").Mode): void;
    lchmod: typeof import("fs").lchmod;
    lchmodSync(path: import("fs").PathLike, mode: import("fs").Mode): void;
    stat: typeof import("fs").stat;
    statSync(path: import("fs").PathLike, options: import("fs").BigIntOptions): import("fs").BigIntStats;
    statSync(path: import("fs").PathLike, options: import("fs").StatOptions): import("fs").BigIntStats | import("fs").Stats;
    statSync(path: import("fs").PathLike): import("fs").Stats;
    fstat: typeof import("fs").fstat;
    fstatSync(fd: number): import("fs").Stats;
    lstat: typeof import("fs").lstat;
    lstatSync(path: import("fs").PathLike): import("fs").Stats;
    link: typeof import("fs").link;
    linkSync(existingPath: import("fs").PathLike, newPath: import("fs").PathLike): void;
    symlink: typeof import("fs").symlink;
    symlinkSync(target: import("fs").PathLike, path: import("fs").PathLike, type?: "dir" | "file" | "junction" | null | undefined): void;
    readlink: typeof import("fs").readlink;
    readlinkSync(path: import("fs").PathLike, options?: import("fs").BaseEncodingOptions | "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | null | undefined): string;
    readlinkSync(path: import("fs").PathLike, options: import("fs").BufferEncodingOption): Buffer;
    readlinkSync(path: import("fs").PathLike, options?: string | import("fs").BaseEncodingOptions | null | undefined): string | Buffer;
    realpath: typeof import("fs").realpath;
    realpathSync: typeof import("fs").realpathSync;
    unlink: typeof import("fs").unlink;
    unlinkSync(path: import("fs").PathLike): void;
    rmdir: typeof import("fs").rmdir;
    rmdirSync(path: import("fs").PathLike, options?: import("fs").RmDirOptions | undefined): void;
    mkdir: typeof import("fs").mkdir;
    mkdirSync(path: import("fs").PathLike, options: import("fs").MakeDirectoryOptions & {
        recursive: true;
    }): string;
    mkdirSync(path: import("fs").PathLike, options?: string | number | (import("fs").MakeDirectoryOptions & {
        recursive?: false | undefined;
    }) | null | undefined): void;
    mkdirSync(path: import("fs").PathLike, options?: string | number | import("fs").MakeDirectoryOptions | null | undefined): string | undefined;
    mkdtemp: typeof import("fs").mkdtemp;
    mkdtempSync(prefix: string, options?: import("fs").BaseEncodingOptions | "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | null | undefined): string;
    mkdtempSync(prefix: string, options: import("fs").BufferEncodingOption): Buffer;
    mkdtempSync(prefix: string, options?: string | import("fs").BaseEncodingOptions | null | undefined): string | Buffer;
    readdir: typeof import("fs").readdir;
    readdirSync(path: import("fs").PathLike, options?: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | {
        encoding: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | null;
        withFileTypes?: false | undefined;
    } | null | undefined): string[];
    readdirSync(path: import("fs").PathLike, options: "buffer" | {
        encoding: "buffer";
        withFileTypes?: false | undefined;
    }): Buffer[];
    readdirSync(path: import("fs").PathLike, options?: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | (import("fs").BaseEncodingOptions & {
        withFileTypes?: false | undefined;
    }) | null | undefined): string[] | Buffer[];
    readdirSync(path: import("fs").PathLike, options: import("fs").BaseEncodingOptions & {
        withFileTypes: true;
    }): import("fs").Dirent[];
    close: typeof import("fs").close;
    closeSync(fd: number): void;
    open: typeof import("fs").open;
    openSync(path: import("fs").PathLike, flags: import("fs").Mode, mode?: string | number | null | undefined): number;
    utimes: typeof import("fs").utimes;
    utimesSync(path: import("fs").PathLike, atime: string | number | Date, mtime: string | number | Date): void;
    futimes: typeof import("fs").futimes;
    futimesSync(fd: number, atime: string | number | Date, mtime: string | number | Date): void;
    fsync: typeof import("fs").fsync;
    fsyncSync(fd: number): void;
    write: typeof import("fs").write;
    writeSync(fd: number, buffer: NodeJS.ArrayBufferView, offset?: number | null | undefined, length?: number | null | undefined, position?: number | null | undefined): number;
    writeSync(fd: number, string: string, position?: number | null | undefined, encoding?: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | null | undefined): number;
    read: typeof import("fs").read;
    readSync(fd: number, buffer: NodeJS.ArrayBufferView, offset: number, length: number, position: number | null): number;
    readSync(fd: number, buffer: NodeJS.ArrayBufferView, opts?: import("fs").ReadSyncOptions | undefined): number;
    readFile: typeof import("fs").readFile;
    readFileSync(path: string | number | Buffer | import("url").URL, options?: {
        encoding?: null | undefined;
        flag?: string | undefined;
    } | null | undefined): Buffer;
    readFileSync(path: string | number | Buffer | import("url").URL, options: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | {
        encoding: BufferEncoding;
        flag?: string | undefined;
    }): string;
    readFileSync(path: string | number | Buffer | import("url").URL, options?: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | (import("fs").BaseEncodingOptions & {
        flag?: string | undefined;
    }) | null | undefined): string | Buffer;
    writeFile: typeof import("fs").writeFile;
    writeFileSync(path: string | number | Buffer | import("url").URL, data: string | Uint8Array | Uint8ClampedArray | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array | Float32Array | Float64Array | DataView, options?: string | (import("fs").BaseEncodingOptions & {
        mode?: string | number | undefined;
        flag?: string | undefined;
    }) | null | undefined): void;
    appendFile: typeof import("fs").appendFile;
    appendFileSync(file: string | number | Buffer | import("url").URL, data: string | Uint8Array, options?: string | (import("fs").BaseEncodingOptions & {
        mode?: string | number | undefined;
        flag?: string | undefined;
    }) | null | undefined): void;
    watchFile(filename: import("fs").PathLike, options: {
        persistent?: boolean | undefined;
        interval?: number | undefined;
    } | undefined, listener: (curr: import("fs").Stats, prev: import("fs").Stats) => void): void;
    watchFile(filename: import("fs").PathLike, listener: (curr: import("fs").Stats, prev: import("fs").Stats) => void): void;
    unwatchFile(filename: import("fs").PathLike, listener?: ((curr: import("fs").Stats, prev: import("fs").Stats) => void) | undefined): void;
    watch(filename: import("fs").PathLike, options: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | {
        encoding?: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | null | undefined;
        persistent?: boolean | undefined;
        recursive?: boolean | undefined;
    } | null | undefined, listener?: ((event: string, filename: string) => void) | undefined): import("fs").FSWatcher;
    watch(filename: import("fs").PathLike, options: "buffer" | {
        encoding: "buffer";
        persistent?: boolean | undefined;
        recursive?: boolean | undefined;
    }, listener?: ((event: string, filename: Buffer) => void) | undefined): import("fs").FSWatcher;
    watch(filename: import("fs").PathLike, options: string | {
        encoding?: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | null | undefined;
        persistent?: boolean | undefined;
        recursive?: boolean | undefined;
    } | null, listener?: ((event: string, filename: string | Buffer) => void) | undefined): import("fs").FSWatcher;
    watch(filename: import("fs").PathLike, listener?: ((event: string, filename: string) => any) | undefined): import("fs").FSWatcher;
    exists: typeof import("fs").exists;
    existsSync(path: import("fs").PathLike): boolean;
    access: typeof import("fs").access;
    accessSync(path: import("fs").PathLike, mode?: number | undefined): void;
    createReadStream(path: import("fs").PathLike, options?: string | {
        flags?: string | undefined;
        encoding?: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | undefined;
        fd?: number | undefined;
        mode?: number | undefined;
        autoClose?: boolean | undefined;
        emitClose?: boolean | undefined;
        start?: number | undefined;
        end?: number | undefined;
        highWaterMark?: number | undefined;
    } | undefined): import("fs").ReadStream;
    createWriteStream(path: import("fs").PathLike, options?: string | {
        flags?: string | undefined;
        encoding?: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | undefined;
        fd?: number | undefined;
        mode?: number | undefined;
        autoClose?: boolean | undefined;
        emitClose?: boolean | undefined;
        start?: number | undefined;
        highWaterMark?: number | undefined;
    } | undefined): import("fs").WriteStream;
    fdatasync: typeof import("fs").fdatasync;
    fdatasyncSync(fd: number): void;
    copyFile: typeof import("fs").copyFile;
    copyFileSync(src: import("fs").PathLike, dest: import("fs").PathLike, flags?: number | undefined): void;
    writev: typeof import("fs").writev;
    writevSync(fd: number, buffers: NodeJS.ArrayBufferView[], position?: number | undefined): number;
    readv: typeof import("fs").readv;
    readvSync(fd: number, buffers: NodeJS.ArrayBufferView[], position?: number | undefined): number;
    opendirSync(path: string, options?: import("fs").OpenDirOptions | undefined): import("fs").Dir;
    opendir: typeof import("fs").opendir;
    promises: typeof import("fs/promises");
    Stats: typeof import("fs").Stats;
    Dirent: typeof import("fs").Dirent;
    Dir: typeof import("fs").Dir;
    ReadStream: typeof import("fs").ReadStream;
    WriteStream: typeof import("fs").WriteStream;
    constants: typeof import("fs").constants;
    BigIntStats: typeof import("fs").BigIntStats;
}>;
export default _default;
//# sourceMappingURL=index.d.ts.map