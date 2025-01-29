function BotBar() {
  return (
    <div className="hidden lg:block lg:col-span-12">
      <footer className="flex justify-between blockH2 py-[16px] border-t-grey2 border-t-[1px] md:py-[32px] lg:grid lg:grid-cols-12 lg:gap-x-columnGap ">
        <div className="flex flex-col gap-y-[4px] col-span-4">
            <a href="">LINKDIN</a>
            <a href="">GITHUB</a>
        </div>
        <div className="flex flex-col gap-y-[4px] items-end col-span-4 lg:items-start">
            <h1 className="text-grey1 lg:hidden">IVAN SANZA © 2025. ALL RIGHTS RESERVED.</h1>
        </div>
        <div className="text-grey1 hidden lg:block lg:col-span-4 lg:justify-self-end">
            <h1>IVAN SANZA © 2025. ALL RIGHTS RESERVED.</h1>
        </div>
      </footer>
    </div>
  )
}

export default BotBar