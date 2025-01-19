function useFormCheck(inputs){
    for(const input of inputs){ if(input.value === "") return false }
    return true;
}

export default useFormCheck;