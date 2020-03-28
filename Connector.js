pragma solidity ^0.5.7;

interface ProxyAction {
 function open(address manager, bytes32 ilk, address usr) external returns (uint cdp);
}
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `recipient`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `sender` to `recipient` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract Helper {
    function getCDPManager() public pure returns (address cdpManager) {
        cdpManager = 0x1476483dD8C35F25e568113C5f70249D3976ba21;
    }
    
    function getProxyAction() public pure returns (address proxyAction) {
        proxyAction = 0xd1D24637b9109B7f61459176EdcfF9Be56283a7B;
    }
    
    function getSmartWallet() public pure returns (address smartWallet) {
        smartWallet = 0xc19c5F0ecf68be63937cD1E9A43b4b4B19629c0f;
    }
    
    function getDAI() public pure returns (address dai) {
        dai = 0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108;
    }
}

contract MakerConnector is Helper{
function open(bytes32 ilk) public returns(uint) {
    ProxyAction(getProxyAction()).open(getCDPManager(), ilk, getSmartWallet());
}
 
}